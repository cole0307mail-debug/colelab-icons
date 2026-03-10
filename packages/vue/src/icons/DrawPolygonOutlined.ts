// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DrawPolygonOutlinedSvg from '@colelab/icons-svg/es/asn/DrawPolygonOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DrawPolygonOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DrawPolygonOutlinedSvg }, slots);
  },
});
