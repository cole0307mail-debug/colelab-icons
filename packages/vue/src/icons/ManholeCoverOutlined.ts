// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ManholeCoverOutlinedSvg from '@colelab/icons-svg/es/asn/ManholeCoverOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ManholeCoverOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ManholeCoverOutlinedSvg }, slots);
  },
});
