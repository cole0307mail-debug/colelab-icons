// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PolygonLayerOutlinedSvg from '@colelab/icons-svg/es/asn/PolygonLayerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PolygonLayerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PolygonLayerOutlinedSvg }, slots);
  },
});
