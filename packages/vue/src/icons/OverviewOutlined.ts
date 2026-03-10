// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OverviewOutlinedSvg from '@colelab/icons-svg/es/asn/OverviewOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OverviewOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OverviewOutlinedSvg }, slots);
  },
});
